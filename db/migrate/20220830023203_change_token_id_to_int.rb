class ChangeTokenIdToInt < ActiveRecord::Migration[6.1]
  def change
    reversible do |dir|
      dir.up do
        change_column :token_items, :token_id, "integer USING CAST(token_id AS integer)"
      end
      dir.down do
        change_column :token_items, :token_id, :string
      end
    end
  end
end
