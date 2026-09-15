export default function DragonMark({ small = false }) {
  return (
    <div className={`dragon-mark ${small ? 'dragon-mark--small' : ''}`} aria-hidden="true">
      <span className="mark-core" />
      <span className="mark-scale mark-scale--1" />
      <span className="mark-scale mark-scale--2" />
      <span className="mark-scale mark-scale--3" />
      <span className="mark-scale mark-scale--4" />
      <span className="mark-scale mark-scale--5" />
      <span className="mark-ring" />
    </div>
  )
}
