var Material_NormalMap;
(function (Material_NormalMap_1) {
    var Vector3 = Laya.Vector3;
    var Material_NormalMap = (function () {
        function Material_NormalMap() {
            this.rotation = new Vector3(0, 0.01, 0);
            Laya.Laya3D.init(0, 0);
            Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;
            Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
            Laya.Stat.show();
            var scene = Laya.stage.addChild(new Laya.Scene());
            scene.shadingMode = Laya.BaseScene.PIXEL_SHADING;
            scene.currentCamera = (scene.addChild(new Laya.Camera(new Laya.Viewport(0, 0, Laya.stage.width, Laya.stage.height), Math.PI / 3, 0, 0.1, 100)));
            scene.currentCamera.transform.translate(new Vector3(0, 0.8, 1.6));
            scene.currentCamera.transform.rotate(new Vector3(-30, 0, 0), true, false);
            Laya.stage.on(Laya.Event.RESIZE, null, function () {
                scene.currentCamera.viewport = new Laya.Viewport(0, 0, Laya.stage.width, Laya.stage.height);
            });
            scene.currentCamera.addComponent(CameraMoveScript);
            var directionLight = scene.addChild(new Laya.DirectionLight());
            directionLight.direction = new Vector3(0, -0.8, -1);
            directionLight.ambientColor = new Vector3(0.7, 0.6, 0.6);
            directionLight.specularColor = new Vector3(1.0, 1.0, 0.8);
            directionLight.diffuseColor = new Vector3(1, 1, 1);
            this.root = scene.addChild(new Laya.Sprite3D());
            this.root.transform.localScale = new Vector3(0.2, 0.2, 0.2);
            this.loadModel("threeDimen/staticModel/lizard/lizard-lizard_geo.lm", "threeDimen/staticModel/lizard/lizard_norm.png");
            this.loadModel("threeDimen/staticModel/lizard/lizard-eye_geo.lm", "threeDimen/staticModel/lizard/lizardeye_norm.png");
            this.loadModel("threeDimen/staticModel/lizard/lizard-rock_geo.lm", "threeDimen/staticModel/lizard/rock_norm.png");
            Laya.timer.frameLoop(1, this, function () {
                this.root.transform.rotate(this.rotation, true);
            });
        }
        Material_NormalMap.prototype.loadModel = function (meshPath, normalMapPath) {
            var normalTexture;
            var material;
            var mesh = this.root.addChild(new Laya.Mesh());
            mesh.on(Laya.Event.LOADED, null, function () {
                material = mesh.templet.materials[0];
                (material && normalTexture) && (material.normalTexture = normalTexture);
            });
            mesh.load(meshPath);
            Laya.loader.load(normalMapPath, Laya.Handler.create(null, function (texture) {
                normalTexture = texture;
                (material && normalTexture) && (material.normalTexture = normalTexture);
            }));
        };
        return Material_NormalMap;
    }());
    Material_NormalMap_1.Material_NormalMap = Material_NormalMap;
})(Material_NormalMap || (Material_NormalMap = {}));
new Material_NormalMap.Material_NormalMap();
//# sourceMappingURL=Material_NormalMap.js.map