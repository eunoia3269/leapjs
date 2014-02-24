module.exports = function(Pointable, Frame, Hand){
    var _ = require('underscore')
        , glMatrix = require("gl-matrix")
        , mat3 = glMatrix.mat3
        , vec3 = glMatrix.vec3;

    /**
    * An invalid Pointable object.
    *
    * You can use this Pointable instance in comparisons testing
    * whether a given Pointable instance is valid or invalid. (You can also use the
    * Pointable.valid property.)

    * @static
    * @type {Leap.Pointable}
    * @name Invalid
    * @memberof Leap.Pointable
    */
    Pointable.Invalid = {"id":-1,"handId":-1,"length":45,"direction":[1,0,0],"stabilizedTipPosition":[0,0,0],"tipPosition":[1,0,0],"tipVelocity":[0,0,0],"tool":false,"valid":false,"touchZone":"none"};

    /**
    * An invalid Hand object.
    *
    * You can use an invalid Hand object in comparisons testing
    * whether a given Hand instance is valid or invalid. (You can also use the
    * Hand valid property.)
    *
    * @static
    * @type {Leap.Hand}
    * @name Invalid
    * @memberof Leap.Hand
    */

    Hand.Invalid = _.extend({"id":-1,"fingers":[],"pointables":[],"tools":[],"palmPosition":[0,0,0],"stabilizedPalmPosition":[0,0,0],"direction":[1,0,0],"palmNormal":[0,-1,0],"sphereRadius":100,"valid":true}, {
        pointable: function() { return Pointable.Invalid },
        finger: function() { return Pointable.Invalid },
        toString: function() { return "invalid frame" },
        dump: function() { return this.toString(); },
        rotationAngle: function() { return 0.0; },
        rotationMatrix: function() { return mat3.create(); },
        rotationAxis: function() { return vec3.create(); },
        scaleFactor: function() { return 1.0; },
        translation: function() { return vec3.create(); }
    });

/**
* An invalid Frame object.
*
* You can use this invalid Frame in comparisons testing
* whether a given Frame instance is valid or invalid. (You can also check the
* [Frame.valid]{@link Leap.Frame#valid} property.)
*
* @static
* @type {Leap.Frame}
* @name Invalid
* @memberof Leap.Frame
*/
    Frame.Invalid = _.extend({"id":-1,"fingers":[],"valid":true,"pointables":[],"tools":[],"hands":[],"gestures":[]},
    {
        pointable: function() { return Pointable.Invalid },
        finger: function() { return Pointable.Invalid },
        hand: function() { return Hand.Invalid },
        toString: function() { return "invalid frame" },
        dump: function() { return this.toString() },
        rotationAngle: function() { return 0.0; },
        rotationMatrix: function() { return mat3.create(); },
        rotationAxis: function() { return vec3.create(); },
        scaleFactor: function() { return 1.0; },
        translation: function() { return vec3.create(); }
    });

    Pointable.Invalid.valid =  false;
    Hand.Invalid.valid = false;
    Frame.Invalid.valid = false;
}