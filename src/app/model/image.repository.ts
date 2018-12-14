import { Injectable } from "@angular/core";
import { Image } from "./image.model";
import { StaticDataSource } from "./static.datasource";


@Injectable()
export class ImageRepository {
    private images: Image[] = [];
    private categories: string[] = [];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getImages().subscribe(data => {
            this.images = data;
            this.categories = data.map(p => p.category)
                .filter((c, index, array) => array.indexOf(c) == index).sort();
        });
    }

    getImages(category: string = null): Image[] {
        return this.images
            .filter(p => category == null || category == p.category);
    }

    getImage(id: number): Image {
        return this.images.find(p => p.id == id);
    }

    getCategories(): string[] {
        return this.categories;
    }
}