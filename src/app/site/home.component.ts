import { Component } from "@angular/core";
import { ImageRepository } from "../model/image.repository";
import { Image } from "../model/image.model";

@Component({
    selector: "home",
    templateUrl: "home.component.html"
})

export class HomeComponent {
    public selectedCategory = null;

    constructor(private repository: ImageRepository) { }

    get images():Image[] {
        return this.repository.getImages(this.selectedCategory);
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }
}