import { FONT } from '../constants/theme';
import styled from 'styled-components/native';

type TypographyProps = {
    color?: string;
}

const BaseText = styled.Text<TypographyProps>`
    color: ${({color = "#000"}) => color}
    text-align: center;
`;

const Typography = {
    displayLarge: styled(BaseText)`
        fontSize: 57px;
        fontFamily: ${FONT.black};
        line-height: 64px;
        letterSpacing: -0.25px;
    `,
    displayMedium: styled(BaseText)`
    fontSize: 45px;
    fontFamily: ${FONT.black};
    line-height: 52px;
    `,
    displaySmall: styled(BaseText)`
    fontSize: 36px;
    fontFamily: ${FONT.black};
    line-height: 44px;
    `,
    headlineLarge: styled(BaseText)`
    fontSize: 32px;
    fontFamily: ${FONT.bold};
    line-height: 40px;
    `,
    headlineMedium: styled(BaseText)`
    fontSize: 28px;
    fontFamily: ${FONT.bold};
    line-height: 36px;
    `,
    headlineSmall: styled(BaseText)`
    fontSize: 24px;
    fontFamily: ${FONT.bold};
    line-height: 32px;
    `,
    titleLarge: styled(BaseText)`
    fontSize: 22px;
    fontFamily: ${FONT.semibold};
    line-height: 28px;
    `,
    titleMedium: styled(BaseText)`
    fontSize: 16px;
    fontFamily: ${FONT.semibold};
    font-weight: 500;
    line-height: 24px;
    letterSpacing: 0.1px;
    `,
    titleSmall: styled(BaseText)`
    fontSize: 14px;
    fontFamily: ${FONT.semibold};
    font-weight: 500;
    line-height: 20px;
    letterSpacing: 0.1px;
    `,
    labelLarge: styled(BaseText)`
    fontSize: 14px;
    fontFamily: ${FONT.regular};
    font-weight: 500;
    line-height: 2px;
    letterSpacing: 0.1px;
    `,
    labelMedium: styled(BaseText)`
    fontSize: 12px;
    fontFamily: ${FONT.regular};
    font-weight: 500;
    line-height: 16px;
    letterSpacing: 0.5px;
    `,
    labelSmall: styled(BaseText)`
    fontSize: 12px;
    fontFamily: ${FONT.regular};
    font-weight: 500;
    line-height: 16px;
    letterSpacing: 0.5px;
    `,
    bodyLarge: styled(BaseText)`
    fontSize: 16px;
    fontFamily: ${FONT.regular};
    line-height: 24px;
    letterSpacing: 0.5px;
    `,
    bodyMedium: styled(BaseText)`
    fontSize: 14px;
    fontFamily: ${FONT.regular};
    line-height: 20px;
    letterSpacing: 0.25px;
    `,
    bodySmall: styled(BaseText)`
    fontSize: 12px;
    fontFamily: ${FONT.regular};
    line-height: 16px;
    letterSpacing: 0.4px;
    `,
}

export default Typography;