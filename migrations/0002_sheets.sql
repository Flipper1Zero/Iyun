-- Public source sheets, reports (for moderation), and an index for presence lookups.
CREATE TABLE IF NOT EXISTS sheets(id TEXT PRIMARY KEY,user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,title TEXT NOT NULL,body TEXT NOT NULL,created_at TEXT NOT NULL,hidden INTEGER NOT NULL DEFAULT 0,report_count INTEGER NOT NULL DEFAULT 0);
CREATE INDEX IF NOT EXISTS sheets_user_idx ON sheets(user_id,created_at);
CREATE TABLE IF NOT EXISTS sheet_reports(sheet_id TEXT NOT NULL REFERENCES sheets(id) ON DELETE CASCADE,reporter TEXT NOT NULL,reason TEXT NOT NULL,created_at TEXT NOT NULL,PRIMARY KEY(sheet_id,reporter));
CREATE INDEX IF NOT EXISTS room_members_user_idx ON room_members(user_id);
