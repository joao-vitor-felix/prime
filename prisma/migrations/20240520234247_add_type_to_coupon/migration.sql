/*
  Warnings:

  - You are about to drop the column `discountPercentage` on the `Coupon` table. All the data in the column will be lost.
  - Added the required column `discount` to the `Coupon` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Coupon` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CouponType" AS ENUM ('PERCENTAGE', 'FIXED');

-- AlterTable
ALTER TABLE "Coupon" DROP COLUMN "discountPercentage",
ADD COLUMN     "discount" INTEGER NOT NULL,
ADD COLUMN     "type" "CouponType" NOT NULL;
