
import me.clip.placeholderapi.PlaceholderAPI;
import org.bukkit.Bukkit;
import org.bukkit.configuration.file.FileConfiguration;
import org.bukkit.configuration.file.YamlConfiguration;
import org.bukkit.entity.Player;
import pl._lakidev.mcord.other.layouts.Mode;

import java.io.File;
import java.io.IOException;
import java.util.List;

public class Lang {
    private static File fileC;
    private static FileConfiguration fileCF;
    static String name = "plugin name";
    static String configname = "file .yml";
    static String prefix_location = "other.prefix";

    public static void setup() {
        fileC = new File(Bukkit.getServer().getPluginManager().getPlugin(name).getDataFolder(), configname);

        if (!fileC.exists()) {
            try {
                fileC.createNewFile();
            } catch (IOException e) {
            }
        }
        fileCF = YamlConfiguration.loadConfiguration(fileC);
    }

    public static FileConfiguration get() { return fileCF; }
    public static void send(Mode message_type, Player player, String message) {
        String prefix = get().getString(prefix_location).replace("&", "§");
        if(message_type == Mode.PREFIX_CONFIG) {
            String return_message = PlaceholderAPI.setPlaceholders(player, get().getString(message).replace("&", "§"));
            player.sendMessage(prefix + return_message);
        } else if(message_type == Mode.PREFIX_CUSTOM) {
            String return_message = PlaceholderAPI.setPlaceholders(player, message.replace("&", "§"));
            player.sendMessage(prefix + return_message);
        } else if(message_type == Mode.CONFIG) {
            String return_message = PlaceholderAPI.setPlaceholders(player, get().getString(message).replace("&", "§"));
            player.sendMessage(return_message);
        } else if(message_type == Mode.CUSTOM) {
            String return_message = PlaceholderAPI.setPlaceholders(player, message.replace("&", "§"));
            player.sendMessage(return_message);
        }
    }
    public static void send_console(Mode message_type, String message) {
        String prefix = get().getString(prefix_location).replace("&", "§");
        if(message_type == Mode.PREFIX_CONFIG) {
            String return_message = get().getString(message).replace("&", "§");
            Bukkit.getConsoleSender().sendMessage(prefix + return_message);
        } else if(message_type == Mode.PREFIX_CUSTOM) {
            String return_message = message.replace("&", "§");
            Bukkit.getConsoleSender().sendMessage(prefix + return_message);
        } else if(message_type == Mode.CONFIG) {
            String return_message = get().getString(message).replace("&", "§");
            Bukkit.getConsoleSender().sendMessage(return_message);
        } else if(message_type == Mode.CUSTOM) {
            String return_message = message.replace("&", "§");
            Bukkit.getConsoleSender().sendMessage(return_message);
        }
    }
    public static String replaces(Mode message_type, Player player, String message, String... replaces) {
        String prefix = get().getString(prefix_location).replace("&", "§");
        if(message_type == Mode.PREFIX_CONFIG) {
            for (int i = 0; i < replaces.length; i += 2) {
                if (i + 1 < replaces.length) {
                    message = PlaceholderAPI.setPlaceholders(player, get().getString(message).replace(replaces[i], replaces[i + 1]));
                }
            }
            return prefix + message;
        } else if(message_type == Mode.PREFIX_CUSTOM) {
            for (int i = 0; i < replaces.length; i += 2) {
                if (i + 1 < replaces.length) {
                    message = PlaceholderAPI.setPlaceholders(player, message.replace(replaces[i], replaces[i + 1]));
                }
            }
            return prefix + message;
        } else if(message_type == Mode.CONFIG) {
            for (int i = 0; i < replaces.length; i += 2) {
                if (i + 1 < replaces.length) {
                    message = PlaceholderAPI.setPlaceholders(player, get().getString(message).replace(replaces[i], replaces[i + 1]));
                }
            }
            return message;
        } else if(message_type == Mode.CUSTOM) {
            for (int i = 0; i < replaces.length; i += 2) {
                if (i + 1 < replaces.length) {
                    message = PlaceholderAPI.setPlaceholders(player, message.replace(replaces[i], replaces[i + 1]));
                }
            }
            return message;
        }
        return "{EMPTY_MESSAGE}";
    }
    public static void send_replaces(Mode message_type, Player player, String message, String... replaces) {
        player.sendMessage(replaces(message_type, player, message, replaces));
    }
    public static String string(Player player, String arg0) {
        String text = PlaceholderAPI.setPlaceholders(player, get().getString(arg0).replace("&", "§"));
        return text;
    }
    public static List<String> list_message(Player p, List<String> list) {
        for (int i = 0; i < list.size(); i++) {
            String updated = list.get(i).replaceAll("&", "§");
            list.set(i, updated);
        }
        return list;
    }
    public static void save() {
        try {
            fileCF.save(fileC);
        } catch (IOException e){
            Bukkit.getConsoleSender().sendMessage("§cNie mozna zapisac pliku §4(" + configname + ")§c!");
        }
    }
    public static void reload() {
        fileCF = YamlConfiguration.loadConfiguration(fileC);
    }
}


