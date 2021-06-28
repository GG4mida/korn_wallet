import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {useTheme} from '@/hooks';
import Markdown from 'react-native-markdown-display';

const MarkdownRender = (props: any) => {
  const {content} = props;
  const {styleConfig} = useTheme();
  const markdownStyles = getMarkdownStyles(styleConfig);
  return <Markdown style={markdownStyles}>{content}</Markdown>;
};

const getMarkdownStyles = (styleConfig: any) => {
  return StyleSheet.create({
    // The main container
    body: {
      color: styleConfig.color.content,
      fontSize: styleConfig.fontSize.size_md,
      lineHeight: 24,
    },

    // Headings
    heading1: {
      flexDirection: 'row',
      fontSize: 32,
      lineHeight: 48,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    heading2: {
      flexDirection: 'row',
      fontSize: 24,
      lineHeight: 32,
      fontWeight: 'bold',
      marginVertical: 10,
    },
    heading3: {
      flexDirection: 'row',
      fontWeight: 'bold',
      fontSize: 18,
      lineHeight: 24,
      marginVertical: 10,
    },
    heading4: {
      flexDirection: 'row',
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: 20,
      marginVertical: 10,
    },
    heading5: {
      flexDirection: 'row',
      fontWeight: 'bold',
      fontSize: 14,
      lineHeight: 18,
      marginVertical: 10,
    },
    heading6: {
      flexDirection: 'row',
      fontWeight: 'bold',
      fontSize: 12,
      lineHeight: 16,
      marginVertical: 10,
    },

    // Horizontal Rule
    hr: {
      backgroundColor: '#000000',
      height: 1,
    },

    // Emphasis
    strong: {
      fontWeight: 'bold',
    },
    em: {
      fontStyle: 'italic',
    },
    s: {
      textDecorationLine: 'line-through',
    },

    // Blockquotes
    blockquote: {
      backgroundColor: '#f8f9fa',
      borderColor: '#999',
      borderLeftWidth: 5,
      paddingHorizontal: 10,
      marginVertical: 10,
      marginLeft: 0,
    },

    // Lists
    bullet_list: {
      marginVertical: 10,
    },
    ordered_list: {
      marginVertical: 10,
    },
    list_item: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    // @pseudo class, does not have a unique render rule
    bullet_list_icon: {
      marginLeft: 10,
      marginRight: 10,
    },
    // @pseudo class, does not have a unique render rule
    bullet_list_content: {
      flex: 1,
    },
    // @pseudo class, does not have a unique render rule
    ordered_list_icon: {
      marginLeft: 10,
      marginRight: 10,
    },
    // @pseudo class, does not have a unique render rule
    ordered_list_content: {
      flex: 1,
    },

    // Code
    code_inline: {
      borderWidth: 1,
      borderColor: '#CCCCCC',
      backgroundColor: '#f5f5f5',
      padding: 10,
      borderRadius: 4,
      ...Platform.select({
        ['ios']: {
          fontFamily: 'Courier',
        },
        ['android']: {
          fontFamily: 'monospace',
        },
      }),
    },
    code_block: {
      borderWidth: 1,
      borderColor: '#CCCCCC',
      backgroundColor: '#f5f5f5',
      padding: 10,
      borderRadius: 4,
      ...Platform.select({
        ['ios']: {
          fontFamily: 'Courier',
        },
        ['android']: {
          fontFamily: 'monospace',
        },
      }),
    },
    fence: {
      borderWidth: 1,
      borderColor: '#CCCCCC',
      backgroundColor: '#f5f5f5',
      padding: 10,
      borderRadius: 4,
      ...Platform.select({
        ['ios']: {
          fontFamily: 'Courier',
        },
        ['android']: {
          fontFamily: 'monospace',
        },
      }),
    },

    // Tables
    table: {
      borderWidth: 1,
      borderColor: '#000000',
      borderRadius: 3,
    },
    thead: {},
    tbody: {},
    th: {
      flex: 1,
      padding: 5,
    },
    tr: {
      borderBottomWidth: 1,
      borderColor: '#000000',
      flexDirection: 'row',
    },
    td: {
      flex: 1,
      padding: 5,
    },

    // Links
    link: {
      textDecorationLine: 'underline',
      color: styleConfig.color.blue,
    },
    blocklink: {
      flex: 1,
      borderColor: '#000000',
      borderBottomWidth: 1,
    },

    // Images
    image: {
      flex: 1,
      marginVertical: 10,
    },

    // Text Output
    text: {},
    textgroup: {},
    paragraph: {
      marginTop: 10,
      marginBottom: 10,
      flexWrap: 'wrap',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      width: '100%',
    },
    hardbreak: {
      width: '100%',
      height: 1,
    },
    softbreak: {},

    // Believe these are never used but retained for completeness
    pre: {},
    inline: {},
    span: {},
  });
};

export default MarkdownRender;
