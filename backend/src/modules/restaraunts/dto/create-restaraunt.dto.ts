import { PartialType } from "@nestjs/swagger";
import { Restaraunts } from "src/entities/restaraunts.entity";

export class CreateRestarauntDto extends PartialType(Restaraunts) {}
