import { PartialType } from "@nestjs/swagger";
import { Restaraunt } from "src/entities/restaraunt.entity";

export class CreateRestarauntDto extends PartialType(Restaraunt) {}
