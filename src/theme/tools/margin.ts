import {StyleSheet} from 'react-native';

const getMarginStyle = ({space}: any) => {
  const SPACE_1 = space.size;
  const SPACE_2 = space.size * 2;
  const SPACE_3 = space.size * 3;
  const SPACE_4 = space.size * 4;
  const SPACE_5 = space.size * 5;

  return StyleSheet.create({
    m_0: {
      marginTop: 0,
      marginRight: 0,
      marginBottom: 0,
      marginLeft: 0,
    },
    m_1: {
      marginTop: SPACE_1,
      marginRight: SPACE_1,
      marginBottom: SPACE_1,
      marginLeft: SPACE_1,
    },
    m_2: {
      marginTop: SPACE_2,
      marginRight: SPACE_2,
      marginBottom: SPACE_2,
      marginLeft: SPACE_2,
    },
    m_3: {
      marginTop: SPACE_3,
      marginRight: SPACE_3,
      marginBottom: SPACE_3,
      marginLeft: SPACE_3,
    },
    m_4: {
      marginTop: SPACE_4,
      marginRight: SPACE_4,
      marginBottom: SPACE_4,
      marginLeft: SPACE_4,
    },
    m_5: {
      marginTop: SPACE_5,
      marginRight: SPACE_5,
      marginBottom: SPACE_5,
      marginLeft: SPACE_5,
    },

    my_0: {
      marginTop: 0,
      marginBottom: 0,
    },

    my_1: {
      marginTop: SPACE_1,
      marginBottom: SPACE_1,
    },

    my_2: {
      marginTop: SPACE_2,
      marginBottom: SPACE_2,
    },

    my_3: {
      marginTop: SPACE_3,
      marginBottom: SPACE_3,
    },

    my_4: {
      marginTop: SPACE_4,
      marginBottom: SPACE_4,
    },

    my_5: {
      marginTop: SPACE_5,
      marginBottom: SPACE_5,
    },

    mx_0: {
      marginLeft: 0,
      marginRight: 0,
    },

    mx_1: {
      marginLeft: SPACE_1,
      marginRight: SPACE_1,
    },

    mx_2: {
      marginLeft: SPACE_2,
      marginRight: SPACE_2,
    },

    mx_3: {
      marginLeft: SPACE_3,
      marginRight: SPACE_3,
    },

    mx_4: {
      marginLeft: SPACE_4,
      marginRight: SPACE_4,
    },

    mx_5: {
      marginLeft: SPACE_5,
      marginRight: SPACE_5,
    },

    ml_0: {
      marginLeft: 0,
    },

    ml_1: {
      marginLeft: SPACE_1,
    },

    ml_2: {
      marginLeft: SPACE_2,
    },

    ml_3: {
      marginLeft: SPACE_3,
    },

    ml_4: {
      marginLeft: SPACE_4,
    },

    ml_5: {
      marginLeft: SPACE_5,
    },

    mr_0: {
      marginRight: 0,
    },

    mr_1: {
      marginRight: SPACE_1,
    },

    mr_2: {
      marginRight: SPACE_2,
    },

    mr_3: {
      marginRight: SPACE_3,
    },

    mr_4: {
      marginRight: SPACE_4,
    },

    mr_5: {
      marginRight: SPACE_5,
    },

    mt_0: {
      marginTop: 0,
    },

    mt_1: {
      marginTop: SPACE_1,
    },

    mt_2: {
      marginTop: SPACE_2,
    },

    mt_3: {
      marginTop: SPACE_3,
    },

    mt_4: {
      marginTop: SPACE_4,
    },

    mt_5: {
      marginTop: SPACE_5,
    },

    mb_0: {
      marginBottom: 0,
    },

    mb_1: {
      marginBottom: SPACE_1,
    },

    mb_2: {
      marginBottom: SPACE_2,
    },

    mb_3: {
      marginBottom: SPACE_3,
    },

    mb_4: {
      marginBottom: SPACE_4,
    },

    mb_5: {
      marginBottom: SPACE_5,
    },
  });
};

export default getMarginStyle;
