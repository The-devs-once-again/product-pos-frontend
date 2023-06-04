import Typography from "components/typography";
import { COLORS } from "constants/theme";
import { Image, View } from "react-native";

type SideButtonProps = {
  buttonName: string;
  buttonIcon: (color: string, isFilled: boolean) => React.ReactNode;
  isActive: boolean;
};

export const SideButton: React.FC<SideButtonProps> = ({
  buttonName,
  buttonIcon,
  isActive,
}) => {
  const activeColor = COLORS.primary[300];

  return (
    <View
      style={{
        backgroundColor: "white",
        paddingVertical: 20,
        borderRadius: 10,
      }}
    >
      {/* Navs */}
      <View
        style={{ paddingLeft: 35, alignItems: "center", flexDirection: "row" }}
      >
        {buttonIcon(isActive ? activeColor : COLORS.gray[300], isActive)}
        <View style={{ paddingLeft: 16 }}>
          <Typography.titleSmall
            textAlign="center"
            color={isActive ? activeColor : COLORS.gray[300]}
          >
            {buttonName}
          </Typography.titleSmall>
        </View>
      </View>
    </View>
  );
};
