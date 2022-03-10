import { Ball, Game, Auto, Endgame, Teleop, GameInfo } from '../models';
export const encode = (game: Game): string => {
  const { auto, pregame, teleop, endgame, gameInfo, other } = game;

  return `${encodeAuto(auto)},${pregame.preloadedBalls},${encodeTeleop(
    teleop
  )},${encodeEndgame(endgame)},${encodeGameInfo(gameInfo)},${other.rank},${
    other.scoutInitials
  }`;
};

export const encodeGameInfo = ({
  matchNumber,
  matchType,
  scoutId,
  teamColor,
  teamNumber,
}: GameInfo) =>
  `${matchNumber},${matchType},${scoutId},${teamColor},${teamNumber}`;

export const decodeGameInfo = (s: string): GameInfo => {
  const split = s.split(',');

  return {
    matchNumber: Number(split[0]),
    matchType: split[1] as GameInfo['matchType'],
    scoutId: split[2] as GameInfo['scoutId'],
    teamColor: split[3] as GameInfo['teamColor'],
    teamNumber: Number(split[4]),
  };
};

export const encodeBalls = (ball: Ball) =>
  `${ball.intakeFloor},${ball.intakeHuman},${ball.missed},${ball.scoredHigh},${ball.scoredLow}`;

export const encodeAuto = ({
  apron,
  humanPlayerLow,
  humanPlayerHigh,
  ...ball
}: Auto) =>
  `${apron},${humanPlayerLow},${humanPlayerHigh},${encodeBalls(ball)}`;

export const encodeTeleop = ({ defense, penalties, ...ball }: Teleop) =>
  `${defense},${penalties},${encodeBalls(ball)}`;

export const encodeEndgame = ({ climbHeight, climbSuccess }: Endgame) =>
  `${climbHeight},${climbSuccess}`;
