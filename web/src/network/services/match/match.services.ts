import groups from '../../../db/data.json';
import matchesData from '../../../db/matches.json';

export interface IStanding{
  pj: number;
  sf: number;
  gf: number;
  pts: number;
  member: any;
}

const getStandings = (groupName: string): Array<IStanding> => {
  const groupMatches = matchesData.matches.filter(m => m.group == groupName);
  const group = groups.tournament.groups.find(g => g.name == groupName)
  const standings: Array<IStanding> = [];
  group?.members.forEach(member => {
    const row: IStanding = {pj: 0, sf: 0, pts: 0, gf: 0, member}
    const result = groupMatches
      .filter(gm => (gm.player_1.name === member.name || gm.player_2.name === member.name ) && gm.result)
    const statistic = result
      .map(m => {
        const data = calculateData(m.player_1.name == member.name ? 0 : 1, m.result)
        row.sf += data.sf;
        row.gf += data.gf;
        row.pts += data.pts;
      });
    row.pj = result.length;
    standings.push(row);
  });
  return standings.sort((a, b) => b.pts - a.pts || b.sf - a.sf || b.gf - a.gf);
}

const calculateData = (index, result): any => {
  const data = {
    pts: result.winner == index,
    sf: 0, 
    gf: 0
  }
  switch (index){
    case 0:
      data.sf += result.set_1.games[0] > result.set_1.games[1] ? 1 : -1;
      data.sf += result.set_2.games[0] > result.set_2.games[1] ? 1 : -1;
      break;
    case 1:
      data.sf += result.set_1.games[0] < result.set_1.games[1] ? 1 : -1;
      data.sf += result.set_2.games[0] < result.set_2.games[1] ? 1 : -1;
      break;
  }
  data.gf += result.set_1.games[index] - result.set_1.games[index ? 0: 1];
  data.gf += result.set_2.games[index] - result.set_2.games[index ? 0 : 1];
  data.sf += result.super? data.pts ? 1: -1 : 0;
  return data;
}

const getMember = (memberName: string): any => {
  let member: any | null = null;
  groups.tournament.groups.forEach(group => {
    const aux_member = group?.members.find(m => m.name == memberName);
    if (aux_member) {
      member = aux_member;
      return;
    }
  });
  return member;
}

const getQualifyings = (cup: string, stage: string):Array<any> => {
  const matches = matchesData.matches.filter(m => m.group == cup && m.stage == stage);
  return matches;
}

export {getStandings, getMember, getQualifyings}