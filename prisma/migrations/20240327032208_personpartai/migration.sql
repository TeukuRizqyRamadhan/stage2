-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partai" (
    "id" SERIAL NOT NULL,
    "namePartai" TEXT NOT NULL,
    "logo" TEXT NOT NULL,
    "leaderID" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Partai_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Person_email_key" ON "Person"("email");

-- AddForeignKey
ALTER TABLE "Partai" ADD CONSTRAINT "Partai_leaderID_fkey" FOREIGN KEY ("leaderID") REFERENCES "Person"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
