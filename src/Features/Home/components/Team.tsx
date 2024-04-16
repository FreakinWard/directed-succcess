import Image from 'next/image';

import useTeamArea from '../../hooks/useTeamArea';

export default function Team() {
  const { data: teamArea } = useTeamArea();

  if (!teamArea) return null;

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>{teamArea?.title}</h2>
          <p>{teamArea?.paragraph}</p>
        </div>
        <div id="row">
          {teamArea?.teamMembers.map(teamMember => (
            <div key={`${teamMember?.name}-${teamMember?.id}`} className="col-md-3 col-sm-6 team">
              <div className="thumbnail">
                <Image
                  src={teamMember?.image.url}
                  width={teamMember?.image.width}
                  height={teamMember?.image.height}
                  alt={teamMember?.name}
                />
                <div className="caption">
                  <h4>{teamMember?.name}</h4>
                  <p>{teamMember?.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
