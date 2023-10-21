/*
  Warnings:

  - You are about to drop the column `email` on the `paypal` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `paypal` table. All the data in the column will be lost.
  - You are about to drop the column `usuarioId` on the `paypal` table. All the data in the column will be lost.
  - Added the required column `facilitatorAccesToken` to the `Paypal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderId` to the `Paypal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payerId` to the `Paypal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `paymentId` to the `Paypal` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `paypal` DROP FOREIGN KEY `Paypal_usuarioId_fkey`;

-- AlterTable
ALTER TABLE `paypal` DROP COLUMN `email`,
    DROP COLUMN `token`,
    DROP COLUMN `usuarioId`,
    ADD COLUMN `facilitatorAccesToken` VARCHAR(191) NOT NULL,
    ADD COLUMN `orderId` VARCHAR(191) NOT NULL,
    ADD COLUMN `payerId` VARCHAR(191) NOT NULL,
    ADD COLUMN `paymentId` VARCHAR(191) NOT NULL;
