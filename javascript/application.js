var onInvoke = function (invokeEvent) {
    if ((invokeEvent.arguments.length > 0) && invokeEvent.arguments[0] == "dev") {
    }
};
air.NativeApplication.nativeApplication.addEventListener(air.InvokeEvent.INVOKE, onInvoke);

selectFile = function (prompt, typeDescription, filterTypes) {
    Bridge.trace('selectFile');
    var file = air.File.documentsDirectory;
    var fileFilter = new air.FileFilter(typeDescription, filterTypes);
	file.addEventListener(air.FileListEvent.SELECT_MULTIPLE, onFileSelected);
	file.browseForOpenMultiple(prompt, [fileFilter]);
};
