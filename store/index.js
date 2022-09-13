export const state = () => ({
  countdown: {
    now: Math.trunc(new Date(new Date().toUTCString()).getTime() / 1000),
    // UTC time
    date: '2021-06-21',
    time: '00:00',
  },
  dates: [
    {
      title: 'Registration deadline',
      day: '21',
      month: 'June',
    },
    {
      title: 'Competition Phase 01',
      day: '28 - 02',
      month: 'June - July',
    },
    {
      title: 'Competition Phase 02',
      day: '06 - 10 ',
      month: 'July',
    },
    {
      title: 'Winners announced',
      day: '17',
      month: 'Jully',
    },
    {
      title: 'Prize handout',
      day: '25',
      month: 'July',
    },
  ],
  questions: [
    {
      id: 101,
      title: 'Title 1',
      details: 'Desc 1',
      active: false,
    },
    {
      id: 102,
      title: 'Title 2',
      details: 'Desc 2',
      active: false,
    },
    {
      id: 103,
      title: 'Title 3',
      details: 'Desc 3',
      active: false,
    },
    {
      id: 104,
      title: 'Title 4',
      details: 'Desc 4',
      active: false,
    },
    {
      id: 105,
      title: 'Title 5',
      details: 'Desc 5',
      active: false,
    },
  ],
  ctas: [
    {
      url: 'https://cosmos.network',
      overline: 'Guide',
      title: 'Participant Guide',
    },
    {
      url: 'https://cosmos.network',
      overline: 'Regulations',
      title: 'Rules & Regulations',
    },
    {
      url: 'https://cosmos.network',
      overline: 'Support',
      title: 'Get help',
    },
    {
      url: 'https://cosmos.network',
      overline: 'Regulations',
      title: 'Code of conduct',
    },
    {
      url: 'https://cosmos.network',
      overline: 'Support',
      title: 'Resources',
    },
  ],
  sponsors: [
    {
      url: 'https://figment.io',
      text: 'Figment',
      img: 'figment',
    },
    {
      url: 'https://stake.fish',
      text: 'Stakefish',
      img: 'stake-fish',
    },
    {
      url: 'https://www.iqlusion.io',
      text: 'Iqlusion',
      img: 'iqlusion',
    },
    {
      url: 'https://chainflow.io',
      text: 'Chainflow',
      img: 'chainflow',
    },
    {
      url: 'https://interchain.io',
      text: 'Interchain Foundation',
      img: 'interchain',
    },
    {
      url: 'https://tendermint.com',
      text: 'Tendermint',
      img: 'tendermint',
    },
    {
      url: 'https://cosmos.network',
      text: 'Cosmos',
      img: 'cosmos',
    },
  ],
})

export const mutations = {
  updateNow(state) {
    state.countdown.now = Math.trunc(new Date().getTime() / 1000)
  },
}
