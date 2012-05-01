#pragma strict

function Update () {
    transform.localRotation = Quaternion.AngleAxis(Time.deltaTime * 10.0, Vector3.up) * transform.localRotation;

}
