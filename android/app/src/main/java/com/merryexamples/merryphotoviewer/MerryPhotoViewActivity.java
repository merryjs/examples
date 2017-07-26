package com.merryexamples.merryphotoviewer;

import android.app.Activity;
import android.graphics.Color;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v7.app.AppCompatActivity;
import android.view.Menu;
import android.view.MenuItem;

import com.facebook.drawee.generic.GenericDraweeHierarchyBuilder;
import com.facebook.drawee.generic.RoundingParams;
import com.merryexamples.R;
import com.stfalcon.frescoimageviewer.ImageViewer;

import java.util.Random;

/**
 * Created by bang on 26/07/2017.
 */

public class MerryPhotoViewActivity extends AppCompatActivity {
    private MerryPhotoOverlay overlayView;
    private StylingOptions options;
    private Activity mActivity;
    
    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        mActivity = this;
        setContentView(R.layout.merry_photo_activity);
        Bundle extras = getIntent().getExtras();
        if (extras != null) {
            int value = extras.getInt("startPosition");
            String[] data = extras.getStringArray("data");
            //The key argument here must match that used in the other activity
            showPicker(value, data);
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
//        getMenuInflater().inflate(R.menu.styling_options_menu, menu);
        return super.onCreateOptionsMenu(menu);
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
//        options.showDialog(this);
        return super.onOptionsItemSelected(item);
    }

    protected void showPicker(int startPosition, String[] posters) {
        ImageViewer.Builder builder = new ImageViewer.Builder(this, posters)
                .setStartPosition(startPosition)
                .hideStatusBar(false)
                .setOnDismissListener(getDismissListener());
//
//        builder.hideStatusBar(options.get(StylingOptions.Property.HIDE_STATUS_BAR));
//
//        if (options.get(StylingOptions.Property.IMAGE_MARGIN)) {
//            builder.setImageMargin(this, R.dimen.image_margin);
//        }
//
//        if (options.get(StylingOptions.Property.CONTAINER_PADDING)) {
//            builder.setContainerPadding(this, R.dimen.image_margin);
//        }
//
//        if (options.get(StylingOptions.Property.IMAGES_ROUNDING)) {
//            builder.setCustomDraweeHierarchyBuilder(getRoundedHierarchyBuilder());
//        }
//
//        builder.allowSwipeToDismiss(options.get(StylingOptions.Property.SWIPE_TO_DISMISS));
//
//        builder.allowZooming(options.get(StylingOptions.Property.ZOOMING));
//
//        if (options.get(StylingOptions.Property.SHOW_OVERLAY)) {
//            overlayView = new ImageOverlayView(this);
//            builder.setOverlayView(overlayView);
//            builder.setImageChangeListener(getImageChangeListener());
//        }
//
//        if (options.get(StylingOptions.Property.RANDOM_BACKGROUND)) {
//            builder.setBackgroundColor(getRandomColor());
//        }
//
//        if (options.get(StylingOptions.Property.POST_PROCESSING)) {
//            builder.setCustomImageRequestBuilder(
//                    ImageViewer.createImageRequestBuilder()
//                            .setPostprocessor(new GrayscalePostprocessor()));
//        }

        builder.show();
    }

    //
//    private ImageViewer.OnImageChangeListener getImageChangeListener() {
//        return new ImageViewer.OnImageChangeListener() {
//            @Override
//            public void onImageChange(int position) {
//                String url = posters[position];
//                overlayView.setShareText(url);
//                overlayView.setDescription(descriptions[position]);
//            }
//        };
//    }
//
    private ImageViewer.OnDismissListener getDismissListener() {
        return new ImageViewer.OnDismissListener() {
            @Override
            public void onDismiss() {
                mActivity.finish();
//                AppUtils.showInfoSnackbar(findViewById(R.id.coordinator),
//                        R.string.message_on_dismiss, false);
            }
        };
    }

    private GenericDraweeHierarchyBuilder getRoundedHierarchyBuilder() {
        RoundingParams roundingParams = new RoundingParams();
        roundingParams.setRoundAsCircle(true);

        return GenericDraweeHierarchyBuilder.newInstance(getResources())
                .setRoundingParams(roundingParams);
    }

    private int getRandomColor() {
        Random random = new Random();
        return Color.argb(255, random.nextInt(156), random.nextInt(156), random.nextInt(156));
    }
}
