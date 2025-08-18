import { Image } from "expo-image";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  name: string;
  role?: string;
  photo?: string; // full URL to the image on your website (or "")
  blurb?: string;
};

function initialsFrom(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] ?? "" : "";
  return (first + last).toUpperCase();
}

const TeamCard = memo(({ name, role, photo, blurb }: Props) => {
  const showLetterAvatar = !photo;

  return (
    <View style={styles.card}>
      {/* Avatar */}
      <View style={styles.avatarWrap}>
        {showLetterAvatar ? (
          <View style={styles.letterAvatar}>
            <Text style={styles.letterText}>{initialsFrom(name)}</Text>
          </View>
        ) : (
          <Image
            source={{ uri: photo }}
            style={styles.photo}
            contentFit="cover"
            // cache to disk so scrolling is fast next time
            cachePolicy="memory-disk"
            // gentle placeholder while loading
            placeholder={PLACEHOLDER}
            transition={250}
            accessibilityLabel={`${name} profile photo`}
          />
        )}
      </View>

      {/* Text */}
      <View style={styles.textWrap}>
        <Text style={styles.name}>{name}</Text>
        {!!role && <Text style={styles.role}>{role}</Text>}
        {!!blurb && <Text style={styles.blurb}>{blurb}</Text>}
      </View>
    </View>
  );
});

export default TeamCard;

// a soft gray placeholder (1×1 PNG as data URI) – tiny & built-in
const PLACEHOLDER =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAADUlEQVR4nGMAAQAABQABrF0MeQAAAABJRU5ErkJggg==";

const AVATAR_SIZE = 64;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E6F2EF",
    padding: 14,
    marginBottom: 12,
    // light shadow
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  avatarWrap: {
    marginRight: 14,
  },
  photo: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    backgroundColor: "#F2F2F2",
  },
  letterAvatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    backgroundColor: "#3CB5A3", // Island Health teal
    alignItems: "center",
    justifyContent: "center",
  },
  letterText: {
    color: "white",
    fontSize: 22,
    fontWeight: "700",
  },
  textWrap: { flex: 1 },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1E355F", // deep blue
  },
  role: {
    marginTop: 2,
    color: "#3C4A6B",
  },
  blurb: {
    marginTop: 6,
    color: "#4F5B72",
    lineHeight: 18,
  },
});
