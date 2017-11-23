"""empty message

Revision ID: c61e98feffb5
Revises: a2b182dfec06
Create Date: 2017-11-10 11:13:01.767000

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c61e98feffb5'
down_revision = 'a2b182dfec06'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column(u'progress_recapitulations', sa.Column('budgeted_spending', sa.DECIMAL(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column(u'progress_recapitulations', 'budgeted_spending')
    # ### end Alembic commands ###