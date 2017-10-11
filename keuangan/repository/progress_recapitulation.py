from base import BaseRepository
from keuangan.models import ProgressRecapitulation

class ProgressRecapitulationRepository(BaseRepository):
    def __init__(self, db):
        self.db = db
        self.model = ProgressRecapitulation

    def get_by_region(self, region_id):
        return self.db.session.query(self.model) \
            .filter(self.model.fk_region_id == region_id) \
            .all()

    def delete_by_region(self, region_id):
        self.db.session.query(self.model) \
            .filter(self.model.fk_region_id == region_id) \
            .delete()
