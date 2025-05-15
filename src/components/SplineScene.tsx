import Spline from '@splinetool/react-spline';

interface SplineSceneProps {
    scene_url: string;
}

export default function SplineScene( {scene_url} : SplineSceneProps) {
  return (
    <Spline scene={scene_url}/>
  );
}
