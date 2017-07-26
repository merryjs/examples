package com.merryexamples.PhotoViewer;

/**
 * Created by bang on 26/07/2017.
 */
//
//export interface Photo {
//    url: string;
//    title: string;
//    summary: string;
//}
//
//export interface PhotoViewerOptions {
//    data: string[];
//    titleColor?: string;
//    summaryColor?: string;
//}
public class MerryPhotoData {
    public String getUrl() {
        return url;
    }

    public MerryPhotoData setUrl(String url) {
        this.url = url;
        return this;
    }

    public String getTitle() {
        return title;
    }

    public MerryPhotoData setTitle(String title) {
        this.title = title;
        return this;
    }

    public String getSummary() {
        return summary;
    }

    public MerryPhotoData setSummary(String summary) {
        this.summary = summary;
        return this;
    }

    public String url;
    public String title;
    public String summary;
}
