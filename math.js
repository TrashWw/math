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
    var angle
}



/*
 * @functionName vectorMultiplication
 * @des 计算两个向量之间的点积
 * @param (THREE.Vector3,THREE.Vector3)
 */

var vectorMultiplication = function ( vector1, vector2 ) {
    var result = vector1[ 0 ] * vector2[ 0 ] + vector1[ 1 ] * vector2[ 1 ] + vector1[ 2 ] * vector2[ 2 ];
    return result;
}



/*
 * @functionName canculateNorm
 * @des 计算向量的2范数（欧式距离）
 * @param (THREE.Vector3)
 */

var canculateNorm = function ( vector ) {

}