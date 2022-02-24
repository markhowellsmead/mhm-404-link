<?php

/**
 * Plugin Name:       Block: Archive link
 * Description:       Provides an alternative link to the blog archive site.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Mark Howells-Mead
 * Author URI:        https://permanenttourist.ch/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       mhm-404-link
 *
 * @package           mhm/404-link
 */

function mhm_404_link_block_init()
{
	register_block_type(__DIR__ . '/build');
}
add_action('init', 'mhm_404_link_block_init');
