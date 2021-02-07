<?php
    global $currLang;
    //$currLang = pll_current_language(); // For Polylang
    $currLang = 'en'
?>

<!DOCTYPE html>
<html lang="<?=$currLang?>">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title><?php bloginfo( 'title' ); ?></title>

    <link rel="shortcut icon" href="<?= get_template_directory_uri(); ?>/images/favicon.png">
    <link rel="apple-touch-icon-precomposed" href="<?= get_template_directory_uri(); ?>/images/favicon.png">

	<?php wp_head() ?>

	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
	<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
	<![endif]-->

</head>
<body <?php body_class(); ?>>

<header>
	<div class="container">
		<div class="row align-items-center">
            <div class="d-none d-lg-flex col-lg-8 justify-content-end align-items-center">
	            <?php wp_nav_menu( [
		            'menu' => 'Main menu',
	            ]); ?>
            </div>
		</div>
	</div>
</header>
