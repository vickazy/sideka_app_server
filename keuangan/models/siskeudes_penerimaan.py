from keuangan import db
from keuangan import ma
from keuangan.helpers import CustomDateTime
from base import BaseModel
from region import RegionModelSchema


class SiskeudesPenerimaan(BaseModel):
    __tablename__ = 'siskeudes_penerimaans'
    pid = db.Column(db.Integer, primary_key=True, autoincrement=True)
    year = db.Column(db.String)
    row_number = db.Column(db.Integer)
    no = db.Column(db.String)
    kode_desa = db.Column(db.String)
    tahun = db.Column(db.String)
    tanggal = db.Column(db.Date)
    uraian = db.Column(db.String)
    nama_penyetor = db.Column(db.String)
    alamat_penyetor = db.Column(db.String)
    ttd = db.Column(db.String)
    rekening_bank = db.Column(db.String)
    nama_bank = db.Column(db.String)
    jumlah = db.Column(db.DECIMAL)
    nama_bendahara = db.Column(db.String)
    jabatan_bendahara = db.Column(db.String)
    status = db.Column(db.String)
    kode_bayar = db.Column(db.Integer)
    ref_bayar = db.Column(db.String)

    fk_region_id = db.Column(db.String, db.ForeignKey('regions.id'))
    region = db.relationship('Region', lazy='select')

    __table_args__ = (
        db.Index('sp_ix_fk_region_id', 'fk_region_id'),
    )


class SiskeudesPenerimaanModelSchema(ma.ModelSchema):
    class Meta:
        model = SiskeudesPenerimaan
        include_fk = True

    tanggal = CustomDateTime(format='keuangan', allow_none=True, missing=True)
    region = ma.Nested(RegionModelSchema, many=False, exclude=('parent',))


class SiskeudesPenerimaanModelSchemaIso(ma.ModelSchema):
    class Meta:
        model = SiskeudesPenerimaan
        include_fk = True

    region = ma.Nested(RegionModelSchema, many=False, exclude=('parent',))