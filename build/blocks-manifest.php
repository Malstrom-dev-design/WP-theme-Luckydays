<?php
// This file is generated. Do not modify it manually.
return array(
	'about' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'luckydaysprints/about',
		'version' => '0.1.0',
		'title' => 'about',
		'category' => 'text',
		'icon' => '',
		'description' => 'about',
		'example' => array(
			
		),
		'attributes' => array(
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'imageAspectRatio' => array(
				'type' => 'string',
				'default' => 'ratio-3-4'
			)
		),
		'innerBlocks' => true,
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'luckydaysprints',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'contact-form' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'luckydaysprints/contact-form',
		'version' => '0.1.0',
		'title' => 'contact-form',
		'category' => 'text',
		'icon' => '',
		'description' => 'contact-form',
		'example' => array(
			
		),
		'attributes' => array(
			'imageUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'orderTypes' => array(
				'type' => 'Array',
				'default' => array(
					'screentryck',
					'illustration',
					''
				)
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'luckydaysprints',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'gallery' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'luckydaysprints/gallery',
		'version' => '0.1.0',
		'title' => 'gallery',
		'category' => 'text',
		'icon' => '',
		'description' => 'gallery',
		'example' => array(
			
		),
		'attributes' => array(
			'imageIds' => array(
				'type' => 'Array',
				'default' => array(
					
				)
			),
			'imageUrls' => array(
				'type' => 'Array',
				'default' => array(
					
				)
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'luckydaysprints',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'info-box' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'luckydaysprints/info-box',
		'version' => '0.1.0',
		'title' => 'info-box',
		'category' => 'text',
		'icon' => 'smiley',
		'description' => 'info-box',
		'example' => array(
			
		),
		'attributes' => array(
			'titleText' => array(
				'type' => 'string',
				'default' => ''
			),
			'paragraphText' => array(
				'type' => 'string',
				'default' => ''
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'luckydaysprints',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	),
	'slide-gallery' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'luckydaysprints/slide-gallery',
		'version' => '0.1.0',
		'title' => 'slide-gallery',
		'category' => 'text',
		'icon' => '',
		'description' => 'slide-gallery',
		'example' => array(
			
		),
		'attributes' => array(
			'title' => array(
				'type' => 'string',
				'default' => 'screentryck & illustrationer'
			),
			'imageUrls' => array(
				'type' => 'Array',
				'default' => array(
					
				)
			)
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'luckydaysprints',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
