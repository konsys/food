import { PartialType } from "@nestjs/mapped-types";
import { Legal } from "src/entities/legalEntity";

export class CreateLegalDto extends PartialType(Legal) {}
