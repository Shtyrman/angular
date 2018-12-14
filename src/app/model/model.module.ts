import { NgModule } from "@angular/core";
import { ImageRepository } from "./image.repository";
import { StaticDataSource } from "./static.datasource";


@NgModule({
    providers: [ImageRepository, StaticDataSource]
})

export class ModelModule { }