<div class="gallery rendered">
    <div class="wrapper">
        <?php $imageData = isset($attributes['imageData']) && is_array($attributes['imageData']) ? $attributes['imageData']: []?>
        <?php
        foreach ($imageData as $image) {
            $id = $image['id'];
            echo "<div class='image-wrapper'>";
                echo wp_get_attachment_image(
                $id,
                'large',
                false,
                [
                    'loading'  => 'lazy',
                    'decoding' => 'async',
                    // 'sizes'    => $sizes,
                ]
                );
            echo "</div>";
            }
        ?>
    </div>
<div class="loader">

</div>

