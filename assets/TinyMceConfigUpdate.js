var fileBrowserOriginalConfigFunction = ipTinyMceConfig;

var ipTinyMceConfig = function () {
    var originalConfig = fileBrowserOriginalConfigFunction();
    originalConfig.plugins = originalConfig.plugins + ', responsivefilemanager, image';
    originalConfig.toolbar2 = originalConfig.toolbar2 + ' image ';
    originalConfig.external_filemanager_path = ip.baseUrl + 'Plugin/TinyMceFileBrowser/filemanager/';

    if (!originalConfig.external_plugins) {
        originalConfig.external_plugins = {};
    }
    originalConfig.external_plugins.filemanager = ip.baseUrl + "Plugin/TinyMceFileBrowser/assets/fileManager/plugin.min.js";
    originalConfig.external_plugins.responsivefilemanager = ip.baseUrl + "Plugin/TinyMceFileBrowser/assets/responsivefilemanager/plugin.min.js";

    originalConfig.filemanager_title = "Responsive Filemanager";
    originalConfig.valid_elements = originalConfig.valid_elements + ',img[src|alt|width|height]';
    return originalConfig;

}
