import { Injectable } from "@angular/core";
import { Image } from "./image.model";
import { Observable, from } from "rxjs";
import { Page } from "./page.model";

@Injectable()
export class StaticDataSource {
    private images: Image[] = [
        new Image(1, "Котенки", "Image 1", "../../assets/img/gallery/cat1.jpg", "Image 1"),
        new Image(2, "Котенки", "Image 2", "../../assets/img/gallery/cat2.jpg", "Image 2"),
        new Image(3, "Котенки", "Image 3", "../../assets/img/gallery/cat3.jpg", "Image 3"),
        new Image(4, "Щенки", "Image 4", "../../assets/img/gallery/dog1.jpg", "Image 4"),
        new Image(5, "Щенки", "Image 5", "../../assets/img/gallery/dog2.jpg", "Image 5"),
        new Image(6, "Щенки", "Image 6", "../../assets/img/gallery/dog3.jpg", "Image 6"),
        new Image(7, "Бонсай", "Image 7", "../../assets/img/gallery/bon1.jpg", "Image 7"),
        new Image(8, "Бонсай", "Image 8", "../../assets/img/gallery/bon2.jpg", "Image 8"),
        new Image(9, "Бонсай", "Image 9", "../../assets/img/gallery/bon3.jpg", "Image 9"),
        new Image(10, "Кванты", "Image 10", "../../assets/img/gallery/qua1.jpg", "Image 10"),
        new Image(11, "Кванты", "Image 11", "../../assets/img/gallery/qua2.jpg", "Image 11"),
        new Image(12, "Кванты", "Image 12", "../../assets/img/gallery/qua3.jpg", "Image 12"),
    ];

    getImages(): Observable<Image[]> {
        return from([this.images]);
    }

}

export class StaticPageSource {
    private pages: Page[] = [
        new Page(1, "Web-проекты", "Dolor officia eu deserunt nisi in nulla nostrud est pariatur occaecat."),
        new Page(2, "Мобильные приложения", "Dolor officia eu deserunt nisi in nulla nostrud est pariatur occaecat."),
    ];

    getPages(): Observable<Page[]> {
        return from([this.pages]);
    }
}