import { mode } from '@chakra-ui/theme-tools';

export const textareaStyles = {
  components: {
    Textarea: {
      baseStyle: {
        field: {
          fontWeight: 400,
          borderRadius: '8px',
        },
      },

      variants: {
        main: (props: any) => ({
          field: {
            bg: mode('transparent', 'navy.900')(props),
            border: '1px solid !important',
            color: mode('secondaryGray.900', 'white')(props),
            borderColor: mode('secondaryGray.100', 'whiteAlpha.100')(props),
            borderRadius: '16px',
            fontSize: 'sm',
            p: '20px',
            _placeholder: { color: 'secondaryGray.400' },
          },
        }),
        filled: (props: any) => ({
          field: {
            bg: mode('transparent', 'navy.900')(props),
            border: '1px solid !important',
            color: mode('secondaryGray.900', 'white')(props),
            borderColor: mode('secondaryGray.100', 'white.100')(props),
            borderRadius: '16px',
            fontSize: 'sm',
            p: '20px',
            _placeholder: { color: 'secondaryGray.400' },
          },
        }),
        auth: (props: any) => ({
          field: {
            bg: 'white',
            border: '1px solid',
            borderColor: 'secondaryGray.100',
            borderRadius: '16px',
            _placeholder: { color: 'secondaryGray.600' },
          },
        }),
        authSecondary: (props: any) => ({
          field: {
            bg: 'white',
            border: '1px solid',

            borderColor: 'secondaryGray.100',
            borderRadius: '16px',
            _placeholder: { color: 'secondaryGray.600' },
          },
        }),
        search: (props: any) => ({
          field: {
            border: 'none',
            py: '11px',
            borderRadius: 'inherit',
            _placeholder: { color: 'secondaryGray.600' },
          },
        }),
      },
    },
  },
};
