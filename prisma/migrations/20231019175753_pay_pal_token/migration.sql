/*
  Warnings:

  - You are about to drop the `paypal` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `paypal`;

-- CreateTable
CREATE TABLE `PaypalToken` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `orderId` VARCHAR(191) NOT NULL,
    `payerId` VARCHAR(191) NOT NULL,
    `paymentId` VARCHAR(191) NOT NULL,
    `facilitatorAccesToken` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
