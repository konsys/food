import { PartialType } from '@nestjs/swagger';
import { Legal } from "src/entities/legal.entity";

export class CreateLegalDto extends PartialType(Legal) {}
