/*
  Warnings:

  - A unique constraint covering the columns `[cartId]` on the table `CartItems` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "CartItems_cartId_key" ON "CartItems"("cartId");
