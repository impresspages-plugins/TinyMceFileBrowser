<?php
/**
 * @package   ImpressPages
 */




namespace Plugin\TinyMceFileBrowser;


class Event
{
    public static function ipBeforeController()
    {

        //ipAddJs('assets/responsivefilemanager/plugin.min.js');
        ipAddJs('assets/TinyMceConfigUpdate.js');
    }
}
