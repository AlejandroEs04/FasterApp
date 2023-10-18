/*
  Warnings:

  - A unique constraint covering the columns `[userToken]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `usuario` ALTER COLUMN `userToken` DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX `Usuario_userToken_key` ON `Usuario`(`userToken`);
