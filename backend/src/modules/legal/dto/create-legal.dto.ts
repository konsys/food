import { PartialType } from "@nestjs/mapped-types";
import { Legal } from "src/entities/legal.entity";

export class CreateLegalDto extends PartialType(Legal) {}
