import MySQLdb
import json

from utils import open_cfg, query_single

def fix_content(old_content):
    if "columns" not in old_content:
        print "cannot fix, no column"
        return old_content

    new_content = {}
    new_content["columns"] = old_content["columns"]
    new_content["timestamp"] = old_content["timestamp"]
    column_length = len(new_content["columns"])
    new_content["data"] = []
    for old_row in old_content["data"]:
        if isinstance(old_row, list):
            new_content["data"].append(old_row)
        elif isinstance(old_row, dict):
            new_row = [None] * column_length
            for i in range(column_length):
                new_row[i] = old_row.get(str(i))
            new_content["data"].append(new_row)
        else:
            print "cannot handle %s" % str(old_row)

    return new_content

if __name__ == "__main__":
    conf = open_cfg('../app.cfg')
    db = MySQLdb.connect(host=conf.MYSQL_HOST,
                 user=conf.MYSQL_USER,
                 passwd=conf.MYSQL_PASSWORD,
                 db=conf.MYSQL_DB)
    cur = db.cursor(MySQLdb.cursors.DictCursor)
    query="select blog_id, domain from sd_desa"
    cur.execute(query)
    desas = list(cur.fetchall())
    count = 0
    for desa in desas:
        cur.execute("select id, content, timestamp, date_created from sd_contents where desa_id=%s and  type = 'penduduk' and api_version<>'2.0' order by timestamp desc limit 1",(desa["blog_id"],))
        sql_row_penduduk = cur.fetchone()
        if sql_row_penduduk is not None:
            content = json.loads(sql_row_penduduk["content"], encoding='ISO-8859-1')
            is_invalid_content = False
            for row in content["data"]:
                if isinstance(row, dict):
                    is_invalid_content = True
                    count += 1
                    break
            if is_invalid_content:
                print "fixing content %d for desa %s" % (sql_row_penduduk["id"], desa["domain"])
                new_content = fix_content(content)
                content_str = json.dumps(new_content, encoding='ISO-8859-1')
                cur.execute("update sd_contents set content = %s where id = %s", (content_str, sql_row_penduduk["id"]))
                db.commit()


    print count
    db.close()
