activate_this = '/usr/lib/ckan/default/bin/activate_this.py'
execfile(activate_this, dict(__file__=activate_this))

#import logging, sys
#logging.basicConfig(stream=sys.stderr)
#sys.stdout = sys.stderr
from api.api import app as application 
