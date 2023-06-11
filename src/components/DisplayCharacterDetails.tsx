import { CharacterDetailsProps } from "../config/types";

export const DisplayCharacterDetails: React.FC<CharacterDetailsProps> = ({
  character,
}) => {
  return (
    <>
      <div className="ellipsis" title={character.name}>
        Name: {character.name}
      </div>
      <div className="ellipsis">Birth: {character.birth || "N/A"}</div>
      <div className="ellipsis">Death: {character.death || "N/A"}</div>
      <div className="ellipsis" title={character.spouse}>
        Spouse: {character.spouse || "N/A"}
      </div>
      <div className="ellipsis">Gender: {character.gender}</div>
      <div className="ellipsis">Hair: {character.hair || "N/A"}</div>
      <div className="ellipsis">Height: {character.height || "N/A"}</div>
      <div className="ellipsis">Race: {character.race || "N/A"}</div>
      <div className="ellipsis">Realm: {character.realm || "N/A"}</div>
      <div className="ellipsis" title={character.wikiUrl}>
        Wiki URL:{" "}
        {character.wikiUrl ? (
          <a href={character.wikiUrl}>{character.wikiUrl}</a>
        ) : (
          "N/A"
        )}
      </div>
    </>
  );
};
