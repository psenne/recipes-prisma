-- CreateTable
CREATE TABLE "Recipe" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL DEFAULT '',
    "content" TEXT NOT NULL DEFAULT '',
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT DEFAULT 'draft',
    "author" TEXT,
    "editor" TEXT,
    CONSTRAINT "Recipe_author_fkey" FOREIGN KEY ("author") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Recipe_editor_fkey" FOREIGN KEY ("editor") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL DEFAULT '',
    "parent" TEXT,
    CONSTRAINT "Tag_parent_fkey" FOREIGN KEY ("parent") REFERENCES "Tag" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_Recipe_tags" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_Recipe_tags_A_fkey" FOREIGN KEY ("A") REFERENCES "Recipe" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_Recipe_tags_B_fkey" FOREIGN KEY ("B") REFERENCES "Tag" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Recipe_editor_key" ON "Recipe"("editor");

-- CreateIndex
CREATE INDEX "Recipe_author_idx" ON "Recipe"("author");

-- CreateIndex
CREATE INDEX "Tag_parent_idx" ON "Tag"("parent");

-- CreateIndex
CREATE UNIQUE INDEX "_Recipe_tags_AB_unique" ON "_Recipe_tags"("A", "B");

-- CreateIndex
CREATE INDEX "_Recipe_tags_B_index" ON "_Recipe_tags"("B");
