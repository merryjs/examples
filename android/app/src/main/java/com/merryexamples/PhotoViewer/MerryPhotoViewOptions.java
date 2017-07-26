package com.merryexamples.PhotoViewer;
import java.io.Serializable;

@SuppressWarnings("serial") //With this annotation we are going to hide compiler warnings
public class MerryPhotoViewOptions {

    public MerryPhotoData[] data;
    public String titleColor;
    public String summaryColor;
    public int initial;
}
