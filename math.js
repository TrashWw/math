/*
* @Author: wr
* @des 主要用于学习三维中，旋转、平移等运动
* @time 2018.8.23
* */

/*
 * @functionName canculatescale
 * @des 计算两个向量之间的角度
 * @param (THREE.Vector3,THREE.Vector3)
 */

var canculatescale = function ( vector1, vector2 ) {
    var value = vectorMultiplication( vector1, vector2 ) / ( canculateNorm( vector1) * canculateNorm( vector2) );
    var angle = Math.acos( value );
    return angle;
}



/*
 * @functionName vectorMultiplication
 * @des 计算两个向量之间的点积
 * @param (THREE.Vector3,THREE.Vector3)
 */

var vectorMultiplication = function ( vector1, vector2 ) {
    var result = vector1.x * vector2.x+ vector1.y * vector2.y + vector1.z * vector2.z;
    return result;
}



/*
 * @functionName canculateNorm
 * @des 计算向量的2范数（欧式距离）
 * @param (THREE.Vector3)
 */

var canculateNorm = function ( vector ) {
    var result = vector.x * vector.x + vector.y * vector.y + vector.z * vector.z;
    return result
}



/*
 * @functionName canculateRotateAxis
 * @des 计算两个向量的旋转轴
 * @param (THREE.Vector3，THREE.Vector3)
 */
var canculateRotateAxis = function ( vector1, vector2 ) {
    var result = new THREE.Vector3(vector1.y * vector2.z - vector1.z * vector2.y,vector1.z * vector2.x - vector1.x * vector2.z,vector1.x * vector2.y - vector1.y * vector2.x);
    return result;
}