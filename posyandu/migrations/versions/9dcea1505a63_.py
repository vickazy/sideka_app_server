"""empty message

Revision ID: 9dcea1505a63
Revises: 1a3ba6cc8d9d
Create Date: 2017-12-28 12:38:13.836000

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9dcea1505a63'
down_revision = '1a3ba6cc8d9d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column(u'users', sa.Column('user_id', sa.Integer(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column(u'users', 'user_id')
    # ### end Alembic commands ###
