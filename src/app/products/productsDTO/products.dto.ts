import { ApiProperty } from "@nestjs/swagger";

export class CreateProductsDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  EAN_GTIN: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  photo_thumbnail: string;

  @ApiProperty()
  category: string;

  @ApiProperty()
  subcategory: string;

  @ApiProperty()
  brand: string;

  @ApiProperty()
  location: string;

  @ApiProperty()
  salePrice: number;

  @ApiProperty()
  CostPrice: number;

  @ApiProperty()
  CurrentStorage: number;

  @ApiProperty()
  StorageLimit: number;

  @ApiProperty()
  unitOfMeasurement: number;

  @ApiProperty()
  note: string;
}
